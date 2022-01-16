export interface LogoStyleProps {
  cssWidth?: number | string;
  cssHeight?: number | string;
}

export type LogoColorVariant = 'color' | 'white';

export type LogoOrientation = 'vertical' | 'horizontal';

export interface BaseLogoProps<
  TColorVariant extends LogoColorVariant = LogoColorVariant
> extends LogoStyleProps {
  className?: string;
  variant?: TColorVariant;
  title?: string;
  width?: number | string;
  height?: number | string;
}

export interface LogoWithTextStyleProps extends LogoStyleProps {
  orientation?: LogoOrientation;
  gap?: string;
}

export interface LogoWithTextProps<
  TColorVariant extends LogoColorVariant = LogoColorVariant
> extends BaseLogoProps<TColorVariant>,
    LogoWithTextStyleProps {
  withText?: boolean;
}
