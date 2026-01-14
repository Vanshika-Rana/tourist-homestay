// Base interface for all react-icons
interface IconBaseProps {
  size?: string | number;
  className?: string;
  style?: React.CSSProperties;
  color?: string;
}

// Game Icons (gi)
declare module 'react-icons/gi' {
  import { FC } from 'react';
  export const GiHorizonRoad: FC<IconBaseProps>;
  export const GiMountainRoad: FC<IconBaseProps>;
}

// Font Awesome (fa)
declare module 'react-icons/fa' {
  import { FC } from 'react';
  export const FaHelicopter: FC<IconBaseProps>;
  export const FaHome: FC<IconBaseProps>;
  export const FaMountain: FC<IconBaseProps>;
  export const FaHiking: FC<IconBaseProps>;
  export const FaStar: FC<IconBaseProps>;
  export const FaCamera: FC<IconBaseProps>;
}

// Material Design (md)
declare module 'react-icons/md' {
  import { FC } from 'react';
  export const MdSpa: FC<IconBaseProps>;
}

// Ionicons 5 (io5)
declare module 'react-icons/io5' {
  import { FC } from 'react';
  export const IoFastFoodOutline: FC<IconBaseProps>;
  export const IoWifiOutline: FC<IconBaseProps>;
}

// Feather Icons (fi)
declare module 'react-icons/fi' {
  import { FC } from 'react';
  export const FiPhone: FC<IconBaseProps>;
  export const FiMail: FC<IconBaseProps>;
  export const FiMapPin: FC<IconBaseProps>;
  export const FiCalendar: FC<IconBaseProps>;
  export const FiUsers: FC<IconBaseProps>;
}

// General react-icons module
declare module 'react-icons' {
  export interface IconBaseProps {
    size?: string | number;
    className?: string;
    style?: React.CSSProperties;
    color?: string;
  }
}

