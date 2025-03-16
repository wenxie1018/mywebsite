//App.js 的測試檔案，使用 Jest + React Testing Library（或其他測試工具）來撰寫單元測試。
//在這裡測試 App 元件的行為或渲染結果。

import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

