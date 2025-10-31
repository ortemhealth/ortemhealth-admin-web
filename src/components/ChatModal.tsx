import React, { useEffect, useRef, useState } from 'react';
import { Modal, Box, Typography, IconButton, List, ListItem, ListItemAvatar, ListItemText, Avatar, TextField, Button } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import SendIcon from '@mui/icons-material/Send';

interface Message {
  sender: string;
  message: string;
  time: string;
}

interface ChatModalProps {
  open: boolean;
  onClose: () => void;
  chatWith: { id: string, name: string, avatarUrl?: string };
  fetchMessages: (withId: string) => Promise<Message[]>;
  sendMessage: (toId: string, message: string) => Promise<void>;
}

export default function ChatModal({ open, onClose, chatWith, fetchMessages, sendMessage }: ChatModalProps) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (open && chatWith.id) {
      fetchMessages(chatWith.id).then(setMessages);
    }
  }, [open, chatWith.id]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, open]);

  const handleSend = async () => {
    if (input.trim()) {
      await sendMessage(chatWith.id, input);
      setMessages([...messages, { sender: "admin", message: input, time: new Date().toLocaleTimeString() }]);
      setInput('');
    }
  };

  return (
    <Modal open={open} onClose={onClose}>
      <Box sx={{
        position: 'absolute', top: '50%', left: '50%',
        transform: 'translate(-50%, -50%)', bgcolor: 'background.paper', boxShadow: 24, p: 0, borderRadius: 2, minWidth: 380, maxWidth: '95%'
      }}>
        <Box sx={{ px: 3, pt: 2, pb: 1, borderBottom: '1px solid #ececec', display: 'flex', alignItems: 'center' }}>
          <Avatar src={chatWith.avatarUrl} sx={{ mr: 2 }} />
          <Typography sx={{ flex: 1 }}>{chatWith.name}</Typography>
          <IconButton onClick={onClose}><CloseIcon /></IconButton>
        </Box>
        <Box sx={{ maxHeight: 320, overflowY: 'auto', p: 3, bgcolor: '#f7f7fa' }}>
          <List>
            {messages.map((msg, i) => (
              <ListItem key={i} alignItems={msg.sender === 'admin' ? 'right' : 'left'}>
                {msg.sender !== 'admin' && (
                  <ListItemAvatar>
                    <Avatar src={chatWith.avatarUrl} />
                  </ListItemAvatar>
                )}
                <ListItemText
                  primary={msg.message}
                  secondary={msg.time}
                  sx={{ textAlign: msg.sender === 'admin' ? "right" : "left" }}
                />
              </ListItem>
            ))}
            <div ref={messagesEndRef} />
          </List>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', p: 2, borderTop: '1px solid #ececec' }}>
          <TextField
            fullWidth size="small"
            placeholder="Type a message..." sx={{ mr: 1 }}
            value={input}
            onChange={e => setInput(e.target.value)}
            onKeyDown={e => { if (e.key === 'Enter') handleSend(); }}
          />
          <IconButton color="primary" onClick={handleSend}><SendIcon /></IconButton>
        </Box>
      </Box>
    </Modal>
  );
}
