# interest-ui

Next.jsで「interest-ui」という親ディレクトリ名のフロントエンドプロジェクトを構築する件、構成や内容について少し確認させてください。成果物をzipファイルとして提供することはできませんが、代わりにプロジェクトの構成とコードを丁寧にご案内しますので、すぐにご自身の環境でセットアップできるようにします。

以下は基本的な構成と初期コードです：

---

## 📁 プロジェクト構成

```
interest-ui/
├── public/
│   └── favicon.ico
├── src/
│   ├── pages/
│   │   └── index.tsx
│   ├── components/
│   │   └── Header.tsx
│   └── styles/
│       └── globals.css
├── .gitignore
├── next.config.js
├── package.json
├── tsconfig.json
└── README.md
```

---

## ⚙️ セットアップ手順

1. **プロジェクト作成**
```bash
npx create-next-app@latest interest-ui --typescript
cd interest-ui
```

2. **グローバルCSSの編集**（`src/styles/globals.css`）
```css
body {
  margin: 0;
  font-family: 'Segoe UI', sans-serif;
  background-color: #f5f5f5;
}
```

3. **Headerコンポーネント作成**（`src/components/Header.tsx`）
```tsx
import React from 'react';

const Header = () => {
  return (
    <header style={{ padding: '1rem', backgroundColor: '#0070f3', color: 'white' }}>
      <h1>Interest UI</h1>
    </header>
  );
};

export default Header;
```

4. **トップページ編集**（`src/pages/index.tsx`）
```tsx
import Head from 'next/head';
import Header from '../components/Header';

export default function Home() {
  return (
    <>
      <Head>
        <title>Interest UI</title>
        <meta name="description" content="A Next.js frontend project" />
      </Head>
      <Header />
      <main style={{ padding: '2rem' }}>
        <h2>Welcome to Interest UI</h2>
        <p>This is a simple Next.js frontend setup.</p>
      </main>
    </>
  );
}
```

---

## ✅ 実行方法

```bash
npm install
npm run dev
```

http://localhost:3000 にアクセスすると、Interest UIのトップページが表示されます。

---

もしこのプロジェクトに特定の機能（API連携、認証、UIライブラリなど）を追加したい場合は、ぜひ教えてください。目的に合わせて構成を拡張できますよ。たとえば：

- 🌿 Tailwind CSSでスタイリング
- 🔐 Auth.jsやNextAuthでログイン機能
- 📦 ZustandやReduxで状態管理
- 📊 Chart.jsでデータ可視化

どんなUIを目指しているか、もう少し教えていただければ、さらに最適な設計をご提案できます。
