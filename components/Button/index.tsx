import React, { forwardRef } from 'react';
import { __DEV__ } from '../../utils/assertions';

type BaseButtonProps = Omit<React.HTMLProps<HTMLButtonElement>, 'size'>;

/* === Button Element === */

export interface ButtonProps extends BaseButtonProps {
  children: React.ReactNode;
  fullWidth?: boolean;
  className?: string;
  variant?: 'solid' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  as?: string;
  isExternal?: boolean;
  type?: 'button' | 'submit' | 'reset';
  isLoading?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      variant = 'solid',
      size = 'md',
      fullWidth = false,
      className,
      as = 'button',
      isExternal = false,
      ...rest
    },
    ref
  ) => {
    let tempClassNames: string[] = [];

    const sharedClasses = [
      'focus:outline-none',
      'focus:ring-2',
      'focus:ring-indigo-400',
      'focus:ring-offset-2',
      'focus:ring-offset-indigo-50',
      'font-semibold',
      'rounded-full',
      'inline-flex',
      'flex-shrink-0',
      'items-center',
      'justify-center',
      'hover:-translate-y-0.5',
      'transition-all',
      'ease-in-out',
      'duration-150',
    ];

    if (fullWidth) sharedClasses.push('w-full');

    // handle variants
    let btnSolid = [
      'bg-indigo-600',
      'hover:bg-indigo-700',
      'text-white',
      'fill-white',
      'shadow-lg',
      'shadow-indigo-600/40',
    ];
    let btnOutline = [
      'text-gray-600',
      'fill-gray-600',
      'dark:text-white',
      'hover:text-indigo-600',
      'hover:fill-indigo-600',
      'hover:dark:text-indigo-600',
      'bg-transparent',
      'hover:bg-indigo-50',
      'border',
      'border-indigo-600',
    ];
    let btnGhost = [
      'bg-indigo-50',
      'text-indigo-600',
      'hover:bg-indigo-100',
      'hover:text-indigo-600',
      'hover:dark:text-indigo-600',
    ];

    if (variant === 'solid') {
      tempClassNames = [...sharedClasses, ...btnSolid];
    } else if (variant === 'outline') {
      tempClassNames = [...sharedClasses, ...btnOutline];
    } else if (variant === 'ghost') {
      tempClassNames = [...sharedClasses, ...btnGhost];
    }

    // handle sizes
    let sizeSm = ['h-8', 'px-3', 'text-sm'];
    let sizeMd = ['h-10', 'px-6'];
    let sizeLg = ['h-12', 'px-6', 'text-lg'];

    if (size === 'sm') {
      tempClassNames = [...tempClassNames, ...sizeSm];
    } else if (size === 'md') {
      tempClassNames = [...tempClassNames, ...sizeMd];
    } else if (size === 'lg') {
      tempClassNames = [...tempClassNames, ...sizeLg];
    }

    let classes = tempClassNames.join(' ');

    let Element = as ? (
      React.createElement(
        as,
        {
          className: `${classes} ${className}`,
          target: isExternal ? '_blank' : undefined,
          rel: isExternal ? 'noopener noreferrer' : undefined,
          ref,
          ...rest,
        },
        children
      )
    ) : (
      <button {...rest} className={`${classes} ${className}`} ref={ref}>
        {children}
      </button>
    );

    return (
      <span className={`relative ${fullWidth ? 'w-full' : undefined}`}>
        {Element}
      </span>
    );
  }
);

if (__DEV__) {
  Button.displayName = 'Button';
}

/* === IconButton Element === */

export interface IconButtonProps extends ButtonProps {
  icon?: React.ReactElement;
  'aria-label': string;
}

export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  (
    {
      children,
      icon,
      className,
      'aria-label': ariaLabel,
      size = 'md',
      ...rest
    },
    ref
  ) => {
    let sharedClasses = ['rounded-full', '!px-0'];

    // handle sizes
    let sizeSm = ['w-8'];
    let sizeMd = ['w-10'];
    let sizeLg = ['w-12'];

    if (size === 'sm') {
      sharedClasses = [...sharedClasses, ...sizeSm];
    } else if (size === 'md') {
      sharedClasses = [...sharedClasses, ...sizeMd];
    } else if (size === 'lg') {
      sharedClasses = [...sharedClasses, ...sizeLg];
    }

    /**
     * Passing the icon as prop or children should work
     */
    const element = icon || children;
    const _children = React.isValidElement(element)
      ? React.cloneElement(element as any, {
          'aria-hidden': true,
          focusable: false,
        })
      : null;

    let classes = sharedClasses.join(' ');
    return (
      <Button
        className={`${classes} ${className}`}
        aria-label={ariaLabel}
        size={size}
        {...rest}
        ref={ref}
      >
        {_children}
      </Button>
    );
  }
);

if (__DEV__) {
  IconButton.displayName = 'IconButton';
}
