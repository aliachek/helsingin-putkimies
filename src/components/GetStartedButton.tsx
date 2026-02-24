import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

interface GetStartedButtonProps {
    children: React.ReactNode;
    to?: string;
    href?: string;
    onClick?: () => void;
    className?: string;
    type?: 'submit' | 'button';
}

/**
 * Animated CTA button inspired by 21st.dev/shsfwork/get-started-button
 * Text fades out on hover while chevron container expands to full width.
 * Dark variant (for light backgrounds)
 */
export function GetStartedButton({ children, to, href, onClick, className = '', type = 'button' }: GetStartedButtonProps) {
    const baseClasses = `group relative inline-flex items-center overflow-hidden bg-primary-dark !text-white font-bold text-base px-8 py-4 rounded-xl cursor-pointer transition-all duration-200 hover:shadow-xl no-underline ${className}`;

    const inner = (
        <>
            <span className="mr-8 transition-opacity duration-500 group-hover:opacity-0">
                {children}
            </span>
            <i className="absolute right-1 top-1 bottom-1 rounded-lg z-10 grid w-1/4 place-items-center transition-all duration-500 bg-white/15 group-hover:w-[calc(100%-0.5rem)] group-active:scale-95 not-italic">
                <ChevronRight size={18} strokeWidth={2.5} aria-hidden="true" className="text-primary" />
            </i>
        </>
    );

    if (to) {
        return <Link to={to} className={baseClasses}>{inner}</Link>;
    }
    if (href) {
        return <a href={href} className={baseClasses}>{inner}</a>;
    }
    return <button type={type} onClick={onClick} className={baseClasses}>{inner}</button>;
}

/**
 * Primary (green) variant for dark backgrounds
 */
export function GetStartedButtonPrimary({ children, to, href, onClick, className = '', type = 'button' }: GetStartedButtonProps) {
    const baseClasses = `group relative inline-flex items-center overflow-hidden bg-primary text-primary-dark font-bold text-base px-8 py-4 rounded-xl cursor-pointer transition-all duration-200 hover:shadow-xl no-underline ${className}`;

    const inner = (
        <>
            <span className="mr-8 transition-opacity duration-500 group-hover:opacity-0">
                {children}
            </span>
            <i className="absolute right-1 top-1 bottom-1 rounded-lg z-10 grid w-1/4 place-items-center transition-all duration-500 bg-black/15 group-hover:w-[calc(100%-0.5rem)] group-active:scale-95 not-italic">
                <ChevronRight size={18} strokeWidth={2.5} aria-hidden="true" className="text-primary-dark" />
            </i>
        </>
    );

    if (to) {
        return <Link to={to} className={baseClasses}>{inner}</Link>;
    }
    if (href) {
        return <a href={href} className={baseClasses}>{inner}</a>;
    }
    return <button type={type} onClick={onClick} className={baseClasses}>{inner}</button>;
}
