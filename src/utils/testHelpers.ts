/**
 * Test helpers for common testing patterns
 */
import { render, RenderResult } from '@testing-library/react';

export const renderWithProps = <T extends React.ComponentType<any>>(
  Component: T,
  props: Parameters<T>[0]
) => {
  return render(<Component {...props} />);
};

export const waitForElement = async (
  element: HTMLElement | null,
  timeout: number = 1000
): Promise<HTMLElement> => {
  if (element) return element;
  
  throw new Error('Element not found');
};

export const simulateKeyboardNavigation = async (
  element: HTMLElement,
  key: string
) => {
  element.focus();
  element.dispatchEvent(new KeyboardEvent('keydown', { key }));
};
