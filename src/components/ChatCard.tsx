import React from 'react';
import { Card, CardContent, Typography, Avatar, Box, Badge } from '@mui/material';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';

interface ChatCardProps {
  name: string;
  lastMessage: string;
  avatarUrl?: string;
  time: string;
  unreadCount?: number;
  onClick?: () => void;
}

export default function ChatCard({
  name,
  lastMessage,
  avatarUrl,
  time,
  unreadCount = 0,
  onClick,
}: ChatCardProps) {
  return (
    <Card sx={{ mb: 2, cursor: onClick ? 'pointer' : 'default' }} onClick={onClick}>
      <CardContent sx={{ display: 'flex', alignItems: 'center' }}>
        <Badge color="primary" badgeContent={unreadCount} invisible={!unreadCount}>
          <Avatar src={avatarUrl} sx={{ bgcolor: '#00a896', mr: 2 }}>
            {!avatarUrl && <ChatBubbleIcon />}
          </Avatar>
        </Badge>
        <Box sx={{ flex: 1 }}>
          <Typography variant="subtitle1" fontWeight={600}>{name}</Typography>
          <Typography variant="body2" color="textSecondary" noWrap>
            {lastMessage}
          </Typography>
        </Box>
        <Typography variant="caption" color="textSecondary" sx={{ ml: 2 }}>
          {time}
        </Typography>
      </CardContent>
    </Card>
  );
}

