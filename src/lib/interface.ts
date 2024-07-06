import { TypographyVariant } from "./type";
import { ReactNode } from "react";
export interface TextFormaterProps {
    text: string;
  }

export interface TypographyInterface {
    children: string | any;
    className?: string;
    variant?: TypographyVariant;
    italic?: boolean;
}
 
export interface SocialMediaInterface {
  name: string;
  username: string;
  url: string;
  icon: JSX.Element
}

export interface HeaderMenu {
  name: string;
  link: string;
  icon: ReactNode;
}