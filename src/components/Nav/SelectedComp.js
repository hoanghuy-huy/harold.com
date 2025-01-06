import * as React from 'react';
import MenuButton from '@mui/joy/MenuButton';
import Menu from '@mui/joy/Menu';
import MenuItem from '@mui/joy/MenuItem';
import Dropdown from '@mui/joy/Dropdown';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { useLanguage } from '~/Hooks/Context/LanguageProvider';

const languages = [
    { code: 'vi', name: 'Tiếng Việt', symbol: 'VN' },
    { code: 'en', name: 'English', symbol: 'EN' },
    { code: 'ko', name: '한국어', symbol: 'KO' },
];

export default function SelectedComp() {
    const { language, setLanguage } = useLanguage();
    const selectedLanguage = languages.find((lang) => lang.code === language);

    const createHandleClose = (code) => () => {
        setLanguage(code);
    };

    return (
        <Dropdown>
            <MenuButton
                endDecorator={<KeyboardArrowDownIcon />}
                variant="plain"
            >
                {selectedLanguage.symbol}
            </MenuButton>
            <Menu>
                {languages.map((lang) => (
                    <MenuItem
                        key={lang.code}
                        selected={language === lang.code}
                        onClick={createHandleClose(lang.code)}
                    >
                        {lang.name} ({lang.symbol})
                    </MenuItem>
                ))}
            </Menu>
        </Dropdown>
    );
}
