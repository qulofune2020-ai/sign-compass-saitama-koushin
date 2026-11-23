import "./globals.css";
import Link from "next/link";
import type { ReactNode } from "react";
import D from "../lib/data.json";

export const metadata = {
  title: "Sign Compass 埼玉・更新版（看板の許可の更新）",
  description: "埼玉県の63市町村で看板の許可を更新するときのチェック。市町村と看板の仕様から、更新で確かめることと窓口を出典つきで出す",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  const 取得日 = [...new Set(Object.values(D.資料 as Record<string, any>).map((s) => s.取得日).filter(Boolean))].sort();
  return (
    <html lang="ja">
      <body>
        <header className="top">
          <div className="wrap">
            <Link href="/" className="brand">Sign Compass<span>（埼玉・更新）</span></Link>
            <nav>
              <Link href="/">更新を確かめる</Link>
              <Link href="/hikaku/">市町村を比べる</Link>
            </nav>
          </div>
        </header>
        <main className="wrap">{children}</main>
        <footer className="wrap foot">
          <p><b>この表示は公開資料をもとにした目安です。申請前に必ず窓口で確認してください。</b></p>
          <p>判定は「要確認・注意・問題なさそう」の3段階で、許可の要否や違法かどうかを決めるものではありません。申請書類の作成は行政書士へ。窓口と条例は、埼玉県「屋外広告物許可事務担当窓口」（令和8年4月1日現在）などによります。</p>
          <p className="muted">資料の取得日：{取得日.length ? `${取得日[0]}〜${取得日[取得日.length - 1]}` : "—"}（各資料の取得日は出典の欄に表示）</p>
        </footer>
      </body>
    </html>
  );
}
