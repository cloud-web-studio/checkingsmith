'use client'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Stack from '@mui/material/Stack';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import AnalyticsRoundedIcon from '@mui/icons-material/AnalyticsRounded';
import PeopleRoundedIcon from '@mui/icons-material/PeopleRounded';
import AssignmentRoundedIcon from '@mui/icons-material/AssignmentRounded';
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';
import InfoRoundedIcon from '@mui/icons-material/InfoRounded';
import HelpRoundedIcon from '@mui/icons-material/HelpRounded';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ArticleIcon from '@mui/icons-material/Article';
import TerminalIcon from '@mui/icons-material/Terminal';
import CardMembershipIcon from '@mui/icons-material/CardMembership';
import Link from 'next/link'
import { usePathname, useSearchParams } from 'next/navigation'

const mainListItems = [
  { text: 'Home', icon: <HomeRoundedIcon />, url:'/' },
  { text: 'Dashboard', icon: <DashboardIcon />, url:'/dashboard' },
  { text: 'Documentation', icon: <ArticleIcon />, url:'/dashboard/docs' },
  { text: 'Sports API', icon: <TerminalIcon />, url:'/dashboard/sports-api' },
  { text: 'Subcriptions', icon: <CardMembershipIcon />, url:'/dashboard/subcriptions' },
];

const secondaryListItems = [
  { text: 'Faqs', icon: <HelpRoundedIcon />, url:'/faqs' },
  { text: 'Notifications', icon: <InfoRoundedIcon />, url:'/dashboard/notifications' },
  { text: 'Settings', icon: <SettingsRoundedIcon />, url:'/dashboard/settings'},
];

export default function MenuContent() {
  const pathname = usePathname()
  
  return (
    <Stack sx={{ flexGrow: 1, p: 1, justifyContent: 'space-between' }}>
      <List dense sx={{gap:1}}>
        {mainListItems.map((item, index) => (
          <ListItem key={index} disablePadding sx={{ display: 'block' }}>
            <Link style={{textDecoration:'none',color:'inherit'}} href={item.url}>
              <ListItemButton selected={pathname === item.url} >
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItemButton>
            </Link>
          </ListItem>
        ))}
      </List>
      {/* <List dense sx={{gap:1}}>
        {secondaryListItems.map((item, index) => (
          <ListItem key={index} disablePadding sx={{ display: 'block' }}>
            <Link style={{textDecoration:'none',color:'inherit'}} href={item.url}>
              <ListItemButton selected={pathname === item.url}>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItemButton>
            </Link>
          </ListItem>
        ))}
      </List> */}
    </Stack>
  );
}
