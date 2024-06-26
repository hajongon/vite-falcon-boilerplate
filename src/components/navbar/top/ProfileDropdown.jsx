import React from 'react'
import { Link } from 'react-router-dom'
import { Dropdown } from 'react-bootstrap'
import profileImg from '@/assets/img/team/avatar.png'
import Avatar from '@/components/common/Avatar'

const ProfileDropdown = () => {
    return (
        <Dropdown navbar={true} as="li">
            <Dropdown.Toggle
                bsPrefix="toggle"
                as={Link}
                to="#!"
                className="pe-0 ps-2 nav-link"
            >
                <Avatar size="xl" src={profileImg} />
            </Dropdown.Toggle>

            <Dropdown.Menu className="dropdown-caret dropdown-menu-card  dropdown-menu-end">
                <div className="bg-white rounded-2 py-2 dark__bg-1000">
                    <Dropdown.Item as={Link} to="/">
                        Log in
                    </Dropdown.Item>
                </div>
            </Dropdown.Menu>
        </Dropdown>
    )
}

export default ProfileDropdown
