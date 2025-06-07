## プロジェクト構築準備作業
本プロジェクト構築に当たって、AIに質問した内容をまとめた資料です。

---
### 【AIへの質問】Next.js(React)で推奨されているコーディング規約を教えてください。
### 【AIからの回答】

Next.js（React）で推奨されるコーディング規約には、**コンポーネント設計、状態管理、スタイリング、型定義、命名規則**などの重要なポイントがあります。以下に、一般的なベストプラクティスをまとめました。

### **1. プロジェクト構成**
Next.jsでは、ディレクトリ構成を整理することで、可読性と保守性を向上させます。  
**推奨ディレクトリ構成の例**：
```
project-root/
├── public/                # 静的アセット
├── src/                   # ソースコード
│   ├── app/               # App Router (Next.js 13+)
│   ├── pages/             # Pages Router
│   ├── components/        # コンポーネント
│   ├── hooks/             # カスタムフック
│   ├── lib/               # ユーティリティ関数
│   ├── services/          # API関連のサービス
│   ├── styles/            # グローバルスタイル
│   ├── types/             # 型定義
│   ├── constants/         # 定数
│   └── config/            # 設定ファイル
├── .eslintrc.js           # ESLint 設定
├── .prettierrc            # Prettier 設定
├── next.config.js         # Next.js 設定
├── package.json           # 依存関係
└── tsconfig.json          # TypeScript 設定
```
**環境変数の管理**：
- `.env.local` に秘密情報を保存し、`.gitignore` に追加する。
- クライアントサイドで利用可能な変数には `NEXT_PUBLIC_` プレフィックスを付ける。

### **2. コンポーネント設計**
Next.jsでは、**コンポーネントの責務を明確にし、適切な分類を行う**ことが重要です。
- **Atoms**: ボタン、入力フィールドなどの最小単位のコンポーネント
- **Molecules**: 複数のAtomを組み合わせた小さな機能単位（例：検索バー）
- **Organisms**: 複数のMoleculeを組み合わせた大きな機能単位（例：ヘッダー）
- **Templates**: ページのレイアウト構造を定義
- **Pages**: 実際のページコンテンツ

**コンポーネントの基本ルール**：
- **一つのコンポーネントは一つの責務のみを持つ**
- **プロップスの型定義を必ず行う**
- **条件付きレンダリングはシンプルに保つ**
- **コンポーネントは小さく保ち、300行を超える場合は分割を検討する**

### **3. スタイリング**
Next.jsでは、スタイリング手法を統一することが推奨されます。
- **CSS Modules**（コンポーネントスコープのスタイリング）
- **Tailwind CSS**（ユーティリティファーストのスタイリング）
- **Styled Components / Emotion**（CSS-in-JS）
- **SASS / SCSS**（拡張CSS）

**CSS Modulesの例**：
```css
/* Button.module.css */
.button {
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
}
.primary {
  background-color: #3182ce;
  color: white;
}
```
```tsx
// Button.tsx
import styles from './Button.module.css';

export const Button = ({ children, variant = 'primary' }) => {
  return <button className={`${styles.button} ${styles[variant]}`}>{children}</button>;
};
```

### **4. 型定義（TypeScript）**
Next.jsでは、**TypeScriptを活用して型安全性を確保する**ことが推奨されます。
- **Propsの型定義を必ず行う**
- **ユーティリティ関数の戻り値の型を明示する**
- **型定義ファイル（`types/`）を作成し、共通の型を管理する**

**型定義の例**：
```tsx
type ButtonProps = {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  size?: 'small' | 'medium' | 'large';
  onClick?: () => void;
  disabled?: boolean;
};
```

### **5. 命名規則**
Next.jsでは、**一貫性のある命名規則を採用する**ことが重要です。
- **コンポーネント名**: `PascalCase`（例：`UserProfile.tsx`）
- **変数・関数名**: `camelCase`（例：`fetchUserData`）
- **定数**: `UPPER_CASE_SNAKE_CASE`（例：`MAX_CONNECTIONS`）
- **ファイル名**: `snake_case`（例：`user_profile.ts`）

### **6. コードフォーマット**
Next.jsでは、**ESLintとPrettierを活用してコードの一貫性を保つ**ことが推奨されます。
- **ESLint**: コードの品質チェック
- **Prettier**: コードフォーマットの統一
- **Husky**: Gitフックを活用してコミット前にフォーマットを適用

### **7. テスト**
Next.jsでは、**JestやReact Testing Libraryを活用してテストを行う**ことが推奨されます。
- **ユニットテスト**: コンポーネント単位でのテスト
- **統合テスト**: APIとの連携を確認するテスト
- **E2Eテスト**: Cypressなどを活用したエンドツーエンドテスト

---

これらのコーディング規約を守ることで、Next.jsのプロジェクトを**可読性が高く、保守しやすい形**にすることができます。  
さらに詳しく知りたい場合は、[こちら](https://qiita.com/taiga-shiokawa/items/c88ac1f7133d4ae09cab)の資料も参考になりますよ！  
他にも気になることがあれば、遠慮なく聞いてくださいね。

---
### 【AIへの質問】Next.js(React)で推奨されているファイル名の命名規則を教えてください。
### 【AIからの回答】

Next.js（React）では、ファイル名の命名規則を統一することで、可読性や保守性を向上させることが推奨されています。以下のようなルールが一般的です：

### **1. コンポーネントファイル**
- **PascalCase** を使用（例：`UserProfile.tsx`）
- 各コンポーネントは独立したファイルにする
- 例：
  ```
  components/
  ├── Header.tsx
  ├── Footer.tsx
  ├── UserProfile.tsx
  ```

### **2. ページファイル**
- **kebab-case** を使用（例：`about-us.tsx`）
- Next.jsのルーティングに適した形式
- 例：
  ```
  pages/
  ├── index.tsx
  ├── about-us.tsx
  ├── contact.tsx
  ```

### **3. APIルート**
- **route.ts** を使用（Next.js 13+）
- APIエンドポイントはフォルダ構造で整理
- 例：
  ```
  app/api/
  ├── user-data/
  │   ├── route.ts
  │   ├── helper.ts
  ```

### **4. ユーティリティ・フック**
- **camelCase** または **kebab-case**
- 例：
  ```
  utils/
  ├── formatDate.ts
  ├── fetchData.ts
  ```

Next.jsの公式ドキュメントにも詳細なファイル命名規則が記載されていますので、[こちら](https://nextjs.org/docs/app/api-reference/file-conventions)を参考にすると良いでしょう！  
他にも気になることがあれば、遠慮なく聞いてくださいね。
