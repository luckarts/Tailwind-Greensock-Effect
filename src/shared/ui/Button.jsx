import classnames from 'classnames';
import React from 'react';
const Button = ({ size, bgColor, href, onClick, textColor, children, borderColor, className }) => {
  return [
    onClick && (
      <button
        key={0}
        onClick={onClick}
        className={classnames(
          `${className}  ${
            borderColor ? 'border-2 border-solid border-' + borderColor : ''
          } font-bold py-2 px-4 rounded-full`,
          {
            'text-xs': size === 'sm',
            'text-xl': size === 'lg'
          }
        )}
      >
        {children}
      </button>
    ),
    href && (
      <a
        key={1}
        href={href}
        className={classnames(
          `${className}  ${
            borderColor ? ' border-2 border-solid border-' + borderColor : ''
          } font-bold py-2 px-4 rounded-full`,
          {
            'text-xs': size === 'sm',
            'text-xl': size === 'lg'
          }
        )}
      >
        {children}
      </a>
    )
  ];
};

export default Button;
