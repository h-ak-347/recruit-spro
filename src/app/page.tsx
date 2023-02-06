import Image from "next/image";
import { Inter } from "@next/font/google";
import s from "./page.module.scss";
import "@acab/reset.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className={s["top-page"]}>
      <header className={s["header"]}>
        <div className={s["container"]}>
          <div className={s["header__inner"]}>
            <h1 className={s["header__logo"]}>ロゴ</h1>
            <ul className={s["header__sub-navigation"]}>
              <li className={s["header__sub-navigation-item"]}>
                <a href="/" className={s["header__sub-navigation-link"]}>
                  セミナーイベント
                </a>
              </li>
              <li className={s["header__sub-navigation-item"]}>
                <a href="/" className={s["header__sub-navigation-link"]}>
                  マーケティングお役立ち情報
                </a>
              </li>
              <li className={s["header__sub-navigation-item"]}>
                <a
                  href="http://"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={s["button"]}
                  data-type="secondary"
                >
                  資料請求
                </a>
              </li>
              <li className={s["header__sub-navigation-item"]}>
                <a href="" className={s["button"]} data-type="primary">
                  お問い合わせ
                </a>
              </li>
            </ul>
          </div>

          <nav className={s["header__inner"]}>
            <ul className={s["header__main-navigation"]}>
              <li className={s["header__main-navigation-item"]}>
                <a href="/" className={s["header__main-navigation-link"]}>
                  サービス内容
                </a>
              </li>
              <li className={s["header__main-navigation-item"]}>
                <a href="/" className={s["header__main-navigation-link"]}>
                  導入事例
                </a>
              </li>
              <li className={s["header__main-navigation-item"]}>
                <a href="/" className={s["header__main-navigation-link"]}>
                  よくある質問
                </a>
              </li>
              <li className={s["header__main-navigation-item"]}>
                <a href="/" className={s["header__main-navigation-link"]}>
                  会社情報
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <header className={s["mobile-header"]}>
        <h1 className={s["mobile-header__logo"]}>ロゴ</h1>
        <button className={s["mobile-header__humburger"]}>
          <span className={s["mobile-header__humburger-icon"]}></span>
          <span className={s["mobile-header__humburger-text"]}>menu</span>
        </button>
      </header>
      <main className={s["main"]}>
        <div className={s["main-visual"]}>
          <div className={s["main-visual__upper"]}>
            <div className={s["main-visual__button"]}>
              <a
                href=""
                className={s["button"]}
                data-type="primary"
                data-width-mobile="full"
              >
                まずは資料請求から（無料）
              </a>
            </div>
          </div>
          <div className={s["main-visual__lower"]}>
            <div className={s["main-visual__lower-belt"]}></div>
            <div className={s["main-visual__lower-belt"]}></div>
          </div>
        </div>
      </main>
    </div>
  );
}
