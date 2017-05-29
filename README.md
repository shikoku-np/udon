# うどん遍路について

## 環境構築

- [Node.js](https://nodejs.org/)
- [Gulp](http://gulpjs.com/)

## インストール方法

開発に必要なパッケージをインストール

```$ npm install --save-dev gulp```

Gulp を実行して開発を始める。ファイルが変更されると自動的に Sass などのファイルが最適化されたかたちで生成されます。

```$ gulp```

##ファイル構成

- src 開発用の環境
	- sass
		- _normalize.scss ブラウザの誤差を吸収
		- _variables.scss 再利用する数字や値
		- udon.scss うどん遍路で使われるスタイル
	- js
		- navigation.js レスポンシブナビゲーション
		- svg4eveybody.min.js SVGを振るいIEでも観覧できる
		- toggle.js テーブルのレスポンシブ処理
	- img 画像フォルダ
	- sg スタイルガイドのみ適応するスタイル（本番時には不要）
- dst 製品版
	- css
		- udon.css 複数の CSS ファイルがひとつにまとまっています
	- js
		- udon.js 複数の JS ファイルがひとつにまとまっています
	- img 画像フォルダ
	- sg スタイルガイド関連のファイル（本番時には不要）
	- sg.html スタイルガイド
	- shop.html お店の詳細ページ
