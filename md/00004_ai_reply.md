### create-next-js-project

[READMEに戻る](../README.md)

---

- カバレッジの測定

```Next.js
npm run test:coverage
```

---

### Next.jsのプロジェクトを作成する方法

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

### create-auto-test

### 自動テストの追加方法
Next.js環境に自動テストを導入するには、まずユニットテストとコンポーネントテストの基盤を整えるのが一般的です。Next.js公式でも推奨されているのは **Jest + React Testing Library** の組み合わせです。以下に導入手順をまとめました。

---

## 🧪 Next.jsに自動テスト環境を導入する手順（Jest + Testing Library）

### ① 必要なパッケージのインストール
```bash
npm install -D jest jest-environment-jsdom @types/jest ts-jest ts-node
npm install -D @testing-library/react @testing-library/dom @testing-library/jest-dom @testing-library/user-event
```

### ② Jestの初期設定
```bash
npm init jest@latest
```
プロンプトに従って設定します：
- TypeScriptを使う → Yes
- テスト環境 → jsdom（ブラウザライク）
- カバレッジレポート → Yes
- カバレッジプロバイダー → v8
- モックの自動クリア → Yes

### ③ `jest.config.ts` の設定（Next.js向け）
```ts
import nextJest from 'next/jest'
import type { Config } from 'jest'

const createJestConfig = nextJest({ dir: './' })

const config: Config = {
  testEnvironment: 'jsdom',
  coverageProvider: 'v8',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
}

export default createJestConfig(config)
```

### ④ `jest.setup.ts` の作成（マッチャー拡張）
```ts
import '@testing-library/jest-dom'
```

### ⑤ テストファイルの作成
Next.jsでは `__tests__` ディレクトリや `.test.tsx` / `.spec.tsx` ファイルを使うのが一般的です。

例：`__tests__/Home.test.tsx`
```tsx
import { render, screen } from '@testing-library/react'
import Home from '../pages/index'

describe('Home Page', () => {
  it('renders heading', () => {
    render(<Home />)
    expect(screen.getByRole('heading', { name: /welcome/i })).toBeInTheDocument()
  })
})
```

### ⑥ テストの実行
```bash
npm test
```

---

## ✅ 補足：E2Eテストも視野に入れるなら
- **Playwright** や **Cypress** が人気です。
- Jestはユニット・結合テスト向き、PlaywrightはE2Eテスト向きです。

---

この構成なら、CI/CDにもスムーズに組み込めます。次のステップとして、GitHub Actionsで自動テストを走らせる設定もご提案できますよ。興味ありますか？

---

### 以下、AI回答補足
- 更にAIに質問し、カバレッジ測定の設定を「package.json」に追加している。
  - 「"test:coverage": "jest --coverage"」という設定。
  - 「npm run test:coverage」コマンドで起動できる。

---

[READMEに戻る](../README.md)
