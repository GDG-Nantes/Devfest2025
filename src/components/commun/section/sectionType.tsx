import classNames from 'classnames';
import React, { CSSProperties } from 'react';
import './section.scss';
import { Container, ContainerProps } from '@mui/material';
import { DesktopOnlySx, MobileOnlySx } from '@/helpers/responsive';

type MediaDisplayType = 'mobile-only' | 'desktop-only';

export const MyContainer: React.FC<
  React.PropsWithChildren<
    ContainerProps & {
      mediaDisplay?: MediaDisplayType;
    }
  >
> = ({ children, mediaDisplay, ...props }) => {
  const sxDisplay =
    mediaDisplay === 'mobile-only'
      ? MobileOnlySx
      : mediaDisplay === 'desktop-only'
        ? DesktopOnlySx
        : {};
  return (
    <Container
      sx={{
        ...sxDisplay,
        ...props.sx,
      }}
      {...props}
    >
      {children}
    </Container>
  );
};

export const Section: React.FC<
  React.PropsWithChildren<
    ContainerProps & {
      variant?: 'primary' | 'primary-dark' | 'secondary' | 'tertiary';
      slim?: boolean;
      mediaDisplay?: MediaDisplayType;
      padding?: 'normal' | 'none' | 'small';
      fullWidth?: boolean;
      className?: string;
    }
  >
> = ({
  children,
  variant = 'primary',
  slim,
  padding = 'normal',
  fullWidth,
  className,
  mediaDisplay,
  ...props
}) => {
  return (
    <MyContainer
      mediaDisplay={mediaDisplay}
      maxWidth={fullWidth ? false : undefined}
      className={classNames(
        'section',
        variant,
        slim && 'slim',
        padding && 'padding-' + padding,
        className
      )}
      {...props}
    >
      {children}
    </MyContainer>
  );
};

type SectionType = React.FC<
  React.PropsWithChildren<{
    slim?: boolean;
    padding?: 'normal' | 'none' | 'small';
    style?: CSSProperties;
    className?: string;
    mediaDisplay?: MediaDisplayType;
    fullWidth?: boolean;
  }>
>;

export const SecondarySection: SectionType = ({ children, ...props }) => (
  <Section variant='secondary' {...props}>
    {children}
  </Section>
);
export const PrimarySection: SectionType = ({ children, ...props }) => (
  <Section variant='primary' {...props}>
    {children}
  </Section>
);
export const TertiarySection: SectionType = ({ children, ...props }) => (
  <Section variant='tertiary' {...props}>
    {children}
  </Section>
);
