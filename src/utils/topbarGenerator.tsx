import { NavLink } from 'react-router-dom';
import { ReactNode } from "react";
import { TUserPath } from "../types";

type TSidebarItem = {
    key: string;
    label: ReactNode;
    children?: TSidebarItem[];
};

// Public Sidebar Generator
export const publicSidebarGenerator = (items: TUserPath[],role) => {
    const SideBarItems = items.reduce((acc: TSidebarItem[], item) => {
        if (item.path && item.element) {
            acc.push({
                key: item.path,
                label: <NavLink to={role? `${role}/${item.path}` :item.path}>{item.name}</NavLink>,
            });
        }

        return acc;
    }, []);

    return SideBarItems;
};

// Private Sidebar Generator
export const privateSidebarGenerator = (items: TUserPath[], role: string) => {
    const cleanPath = (path: string) => path.replace(/^\/*/, ''); // Remove leading slashes

    const SideBarItems = items.reduce((acc: TSidebarItem[], item) => {
        if (item.path && item.element) {
            const itemPath = `/${cleanPath(role)}/${cleanPath(item.path)}`;
            acc.push({
                key: item.path,
                label: <NavLink to={itemPath}>{item.name}</NavLink>,
            });
        }

        if (item.children) {
            const childItems = item.children.map((child) => {
                if (child.name && child.path) {
                    const childPath = `/${cleanPath(role)}/${cleanPath(child.path)}`;
                    return {
                        key: child.name,
                        label: (
                            <NavLink to={childPath}>{child.name}</NavLink>
                        ),
                    };
                }
                return null;
            }).filter(Boolean) as TSidebarItem[];

            if (childItems.length > 0) {
                acc.push({
                    key: item.name!,
                    label: item.name,
                    children: childItems,
                });
            }
        }

        return acc;
    }, []);

    return SideBarItems;
};
