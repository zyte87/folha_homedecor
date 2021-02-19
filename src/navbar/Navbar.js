import { AppBar, Toolbar, IconButton, Badge, Tooltip, Menu, MenuItem, ListItemIcon, Typography , Button} from '@material-ui/core';
import { ShoppingCart, Facebook, Instagram, EcoOutlined, ArrowRight} from '@material-ui/icons';
import { useState } from 'react';

const Navbar = () => {

    const [displayMenu, setDisplayMenu] = useState(null);

    const handleBadgeClick = () => {
        console.log("clique sobre o carrinho");
    }

    const handleInstagramClick = (e) => {
        window.open("https://www.instagram.com/folha_homedecor/");
    }

    const handleFacebookClick = (e) => {
        window.open("https://www.facebook.com/FolhaHomedecor");
    }

    const handleClick = (event) => {
        setDisplayMenu(event.currentTarget);
    };

    const handleClose = () => {
        setDisplayMenu(null);
    };

    return (
        <div className="navbar">
            <AppBar position="fixed" color='default'>
                <Toolbar>
                    <IconButton >
                        <EcoOutlined onClick={handleClick} />
                    </IconButton>
                    <Button>_AboutUs</Button>
                    <Button>_Ourproducts</Button>
                    <Button>_contactus</Button>
                    <div className="bar-spacer" />
                    <div className="badge-button">
                        <Tooltip title="Visit facebook page">
                            <IconButton >
                                <Facebook onClick={handleFacebookClick} />
                            </IconButton>
                        </Tooltip>
                        <Tooltip title="Visit instagram profile">
                            <IconButton id="ig">
                                <Instagram onClick={handleInstagramClick} />
                            </IconButton>
                        </Tooltip>

                        <Tooltip title="Display badge content">
                            <IconButton >
                                <Badge badgeContent={2} color='secondary'>
                                    <ShoppingCart onClick={handleBadgeClick} />
                                </Badge>
                            </IconButton>
                        </Tooltip>
                    </div>
                </Toolbar>
            </AppBar>
        </div >
    );
}

export default Navbar;