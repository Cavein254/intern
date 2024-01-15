import { tokens } from '@/admin/theme';
import BarChartOutlineIcon from '@mui/icons-material/BarChartOutlined';
import CalendarTodayOutlineIcon from '@mui/icons-material/CalendarTodayOutlined';
import ContactsOutlineIcon from '@mui/icons-material/ContactsOutlined';
import HomeOutlineIcon from '@mui/icons-material/HomeOutlined';
import MapOutlineIcon from '@mui/icons-material/MapOutlined';
import MenuOutlineIcon from '@mui/icons-material/MenuOutlined';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutlined';
import PersonOutlineIcon from '@mui/icons-material/PersonOutlined';
import PieChartOutlineIcon from '@mui/icons-material/PieChartOutlined';
import ReceiptOutlineIcon from '@mui/icons-material/ReceiptOutlined';
import TimelineOutlineIcon from '@mui/icons-material/TimelineOutlined';
import { Box, IconButton, Typography, useTheme } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { Menu, MenuItem, Sidebar, sidebarClasses } from 'react-pro-sidebar';

const Item = ({ title, href, icon, selected, setSelected }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <MenuItem
      active={selected === title}
      style={{ color: colors.grey[100] }}
      onClick={() => setSelected(title)}
      icon={icon}
    >
      <Link href={href}>
        <Typography variant="h6">{title}</Typography>
      </Link>
    </MenuItem>
  );
};

const SideBarItem = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState('dashboard');
  return (
    <Box>
      <Sidebar
        rootStyles={{
          [`.${sidebarClasses.container}`]: {
            backgroundColor: colors.primary[400],
          },
        }}
      >
        <Menu>
          <Box>
            {!isCollapsed && (
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                ml="15px"
              >
                <Typography variant="h3" color={colors.grey[100]}>
                  Admin Panel
                </Typography>
                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                  <MenuOutlineIcon />
                </IconButton>
              </Box>
            )}
          </Box>
          {!isCollapsed && (
            <Box mb="25px">
              <Box display="flex" justifyContent="center" alignItems="center">
                <Image
                  alt="profile image"
                  height={100}
                  style={{ cursor: 'pointer', borderRadius: '50%' }}
                  width={100}
                  src="https://images.unsplash.com/photo-1594063596316-aa5f41ceb8dc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bW9kZWwlMjBwb3J0cmFpdHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=150&q=60"
                />
              </Box>
              <Box textAlign="center">
                <Typography
                  variant="h2"
                  color={colors.grey[100]}
                  fontWeight="bold"
                  sx={{ m: '10px 0 0 0' }}
                >
                  User Name
                </Typography>
                <Typography variant="h5" color={colors.greenAccent[300]}>
                  CEO
                </Typography>
              </Box>
            </Box>
          )}
          <Box paddingLeft={isCollapsed ? undefined : '10%'}>
            <Item
              title="Dashboard"
              href="admin/"
              icon={<HomeOutlineIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: '15px 0 0 20px' }}
            >
              Data
            </Typography>
            <Item
              title="Manage Team"
              href="admin/team"
              icon={<PeopleOutlineIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Contacts"
              href="admin/contacts"
              icon={<ContactsOutlineIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Invoices"
              href="admin/invoice"
              icon={<ReceiptOutlineIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: '15px 0 0 20px' }}
            >
              Pages
            </Typography>
            <Item
              title="Profile Form"
              href="admin/form"
              icon={<PersonOutlineIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: '15px 0 0 20px' }}
            >
              Charts
            </Typography>
            <Item
              title="Calendar"
              href="admin/calendar"
              icon={<CalendarTodayOutlineIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="BarChart"
              href="admin/bar"
              icon={<BarChartOutlineIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="PieChart"
              href="admin/pie"
              icon={<PieChartOutlineIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Line Chart"
              href="admin/line"
              icon={<TimelineOutlineIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Geograpy"
              href="admin/geo"
              icon={<MapOutlineIcon />}
              selected={selected}
              setSelected={setSelected}
            />
          </Box>
        </Menu>
      </Sidebar>
    </Box>
  );
};

export default SideBarItem;
