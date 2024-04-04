import Avatar from '@mui/material/Avatar';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';


function AuthIcon() {

    return (
        <Avatar style={{ margin: '8px', backgroundColor: '#000' }}>
          <LockOutlinedIcon />
        </Avatar>

    )
}

export default AuthIcon