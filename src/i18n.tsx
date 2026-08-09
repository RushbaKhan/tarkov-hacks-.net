import { createContext, useContext, useState, useEffect, type ReactNode } from 'react';
import { HOME_TITLE, HOME_DESCRIPTION } from './seo/constants';

export interface Language {
  code: string;
  label: string;
  flag: string;
}

export const LANGUAGES: Language[] = [
  { code: 'en', label: 'English', flag: '🇺🇸' },
  { code: 'de', label: 'Deutsch', flag: '🇩🇪' },
  { code: 'fr', label: 'Francais', flag: '🇫🇷' },
  { code: 'es', label: 'Espanol', flag: '🇪🇸' },
  { code: 'pt', label: 'Portugues', flag: '🇧🇷' },
  { code: 'ru', label: 'Русский', flag: '🇷🇺' },
  { code: 'zh', label: '中文', flag: '🇨🇳' },
  { code: 'ja', label: '日本語', flag: '🇯🇵' },
  { code: 'ko', label: '한국어', flag: '🇰🇷' },
  { code: 'tr', label: 'Turkce', flag: '🇹🇷' },
  { code: 'pl', label: 'Polski', flag: '🇵🇱' },
  { code: 'nl', label: 'Nederlands', flag: '🇳🇱' },
  { code: 'it', label: 'Italiano', flag: '🇮🇹' },
  { code: 'ar', label: 'العربية', flag: '🇸🇦' },
  { code: 'th', label: 'ไทย', flag: '🇹🇭' },
  { code: 'vi', label: 'Tieng Viet', flag: '🇻🇳' },
];

const translations: Record<string, Record<string, string>> = {
  en: {
    'nav.home': 'Home',
    'nav.blog': 'Blog',
    'nav.buy': 'Get Cheats',
    'hero.status': 'Undetected · Updated for latest EFT patch',
    'hero.subtitle': 'Aimbot, ESP & Wallhack',
    'hero.description': 'Dominate Escape From Tarkov effortlessly with undetected aimbot, full ESP, triggerbot, wallhack, and radar. Stream-proof mode.',
    'hero.cta': 'Get Cheats',
    'hero.features': 'See Features',
    'hero.trust': 'Windows 10 & 11 · BattlEye Undetected · Stream-Proof · Cloud-DMA Available',
    'meta.title': HOME_TITLE,
    'meta.description': HOME_DESCRIPTION,
  },
  de: {
    'nav.home': 'Startseite',
    'nav.blog': 'Blog',
    'nav.buy': 'Cheats Kaufen',
    'hero.status': 'Unerkannt · Aktualisiert fur EFT Patch',
    'hero.subtitle': 'Aimbot, ESP & Wallhack',
    'hero.description': 'Dominiere jeden Raid in EFTs EFT. EFT Cheats mit unerkanntem Aimbot, vollem ESP, Wallhack und Loot-Highlights.',
    'hero.cta': 'EFT Cheats Kaufen',
    'hero.features': 'Features Ansehen',
    'hero.trust': 'Windows 10 & 11 · Steam · BattlEye · Extern & Unerkannt',
    'meta.title': 'EFT Cheats – Unerkannter Aimbot & ESP fur EFT EFT',
    'meta.description': 'EFT Cheats mit unerkanntem Aimbot und ESP fur EFT EFT.',
  },
  fr: {
    'nav.home': 'Accueil',
    'nav.blog': 'Blog',
    'nav.buy': 'Acheter',
    'hero.status': 'Indetecte · Mis a jour pour EFT patch',
    'hero.subtitle': 'Aimbot, ESP & Wallhack',
    'hero.description': "Dominez chaque raid dans EFT de EFT. EFT cheats avec aimbot indetecte, ESP complet, wallhack.",
    'hero.cta': 'Obtenir EFT Cheats',
    'hero.features': 'Voir Les Fonctionnalites',
    'hero.trust': 'Windows 10 & 11 · Steam · BattlEye · Externe & Indetecte',
    'meta.title': 'EFT Cheats – Aimbot & ESP Indetecte pour EFT EFT',
    'meta.description': "EFT cheats avec aimbot et ESP indetectes pour EFT de EFT.",
  },
  es: {
    'nav.home': 'Inicio',
    'nav.blog': 'Blog',
    'nav.buy': 'Comprar',
    'hero.status': 'Indetectable · Actualizado para parche EFT',
    'hero.subtitle': 'Aimbot, ESP & Wallhack',
    'hero.description': 'Domina cada incursion en EFT de EFT. EFT cheats con aimbot indetectable, ESP completo, wallhack.',
    'hero.cta': 'Obtener EFT Cheats',
    'hero.features': 'Ver Funciones',
    'hero.trust': 'Windows 10 & 11 · Steam · BattlEye · Externo e Indetectable',
    'meta.title': 'EFT Cheats – Aimbot & ESP Indetectable para EFT EFT',
    'meta.description': 'EFT cheats con aimbot y ESP indetectables para EFT de EFT.',
  },
  pt: {
    'nav.home': 'Inicio',
    'nav.blog': 'Blog',
    'nav.buy': 'Comprar',
    'hero.status': 'Indetectavel · Atualizado para patch EFT',
    'hero.subtitle': 'Aimbot, ESP & Wallhack',
    'hero.description': 'Domine cada raid no EFT da EFT. EFT cheats com aimbot indetectavel, ESP completo, wallhack.',
    'hero.cta': 'Obter EFT Cheats',
    'hero.features': 'Ver Recursos',
    'hero.trust': 'Windows 10 & 11 · Steam · BattlEye · Externo & Indetectavel',
    'meta.title': 'EFT Cheats – Aimbot & ESP Indetectavel para EFT EFT',
    'meta.description': 'EFT cheats com aimbot e ESP indetectaveis para EFT da EFT.',
  },
  ru: {
    'nav.home': 'Главная',
    'nav.blog': 'Блог',
    'nav.buy': 'Купить',
    'hero.status': 'Необнаруживаемый · Обновлен для патча EFT',
    'hero.subtitle': 'Аимбот, ESP и Wallhack',
    'hero.description': 'Доминируйте в каждом рейде в EFT от EFT. EFT читы с необнаруживаемым аимботом, полным ESP, валхаком.',
    'hero.cta': 'Получить EFT Читы',
    'hero.features': 'Смотреть Функции',
    'hero.trust': 'Windows 10 & 11 · Steam · BattlEye · Внешний & Необнаруживаемый',
    'meta.title': 'EFT Читы – Необнаруживаемый Аимбот & ESP для EFT EFT',
    'meta.description': 'EFT читы с необнаруживаемым аимботом и ESP для EFT от EFT.',
  },
  zh: {
    'nav.home': '首页',
    'nav.blog': '博客',
    'nav.buy': '购买',
    'hero.status': '未检测 · 已更新至EFT补丁',
    'hero.subtitle': '自瞄, 透视 & 穿墙',
    'hero.description': '在EFT的EFT中称霸每场突袭。EFT作弊器提供未检测自瞄、完整ESP和穿墙。',
    'hero.cta': '获取EFT作弊器',
    'hero.features': '查看功能',
    'hero.trust': 'Windows 10 & 11 · Steam · BattlEye · 外部 & 未检测',
    'meta.title': 'EFT作弊器 – 未检测自瞄和ESP用于EFT EFT',
    'meta.description': 'EFT作弊器，为EFT EFT提供未检测的自瞄和ESP。',
  },
  ja: {
    'nav.home': 'ホーム',
    'nav.blog': 'ブログ',
    'nav.buy': '購入',
    'hero.status': '未検出 · EFTパッチ対応済み',
    'hero.subtitle': 'エイムボット、ESP & ウォールハック',
    'hero.description': 'EFTのEFTで全レイドを制覇。EFTチートで未検出エイムボット、完全なESP、ウォールハック。',
    'hero.cta': 'EFTチートを入手',
    'hero.features': '機能を見る',
    'hero.trust': 'Windows 10 & 11 · Steam · BattlEye · 外部 & 未検出',
    'meta.title': 'EFTチート – 未検出エイムボットとESP for EFT EFT',
    'meta.description': 'EFT EFT用の未検出エイムボットとESPを備えたEFTチート。',
  },
  ko: {
    'nav.home': '홈',
    'nav.blog': '블로그',
    'nav.buy': '구매',
    'hero.status': '미탐지 · EFT 패치 업데이트됨',
    'hero.subtitle': '에임봇, ESP & 월핵',
    'hero.description': 'EFT의 EFT에서 모든 레이드를 지배하세요. EFT 치트로 미탐지 에임봇, 완전한 ESP, 월핵.',
    'hero.cta': 'EFT 치트 받기',
    'hero.features': '기능 보기',
    'hero.trust': 'Windows 10 & 11 · Steam · BattlEye · 외부 & 미탐지',
    'meta.title': 'EFT 치트 – 미탐지 에임봇 & ESP for EFT EFT',
    'meta.description': 'EFT EFT용 미탐지 에임봇과 ESP가 포함된 EFT 치트.',
  },
  tr: {
    'nav.home': 'Anasayfa',
    'nav.blog': 'Blog',
    'nav.buy': 'Satin Al',
    'hero.status': 'Tespit Edilemez · EFT yaması guncellendi',
    'hero.subtitle': 'Aimbot, ESP & Wallhack',
    'hero.description': "EFT'nin EFT'inda her baskinda domine edin. EFT hileleri ile tespit edilemez aimbot, tam ESP, wallhack.",
    'hero.cta': 'EFT Hilesini Al',
    'hero.features': 'Ozellikleri Gor',
    'hero.trust': 'Windows 10 & 11 · Steam · BattlEye · Harici & Tespit Edilemez',
    'meta.title': 'EFT Hileler – Tespit Edilemez Aimbot & ESP for EFT EFT',
    'meta.description': "EFT EFT için tespit edilemez aimbot ve ESP içeren EFT hilesi.",
  },
  pl: {
    'nav.home': 'Strona Glowna',
    'nav.blog': 'Blog',
    'nav.buy': 'Kup',
    'hero.status': 'Niewykrywalny · Zaktualizowany dla latki EFT',
    'hero.subtitle': 'Aimbot, ESP & Wallhack',
    'hero.description': 'Zdominuj kazdy rajd w EFT od EFT. EFT cheati z niewykrywalnym aimbotem, pelnym ESP, wallhackiem.',
    'hero.cta': 'Zdobadz EFT Cheat',
    'hero.features': 'Zobacz Funkcje',
    'hero.trust': 'Windows 10 & 11 · Steam · BattlEye · Zewnetrzny & Niewykrywalny',
    'meta.title': 'EFT Cheaty – Niewykrywalny Aimbot & ESP dla EFT EFT',
    'meta.description': 'EFT cheaty z niewykrywalnym aimbotem i ESP dla EFT od EFT.',
  },
  nl: {
    'nav.home': 'Home',
    'nav.blog': 'Blog',
    'nav.buy': 'Koop',
    'hero.status': 'Ondetecteerbaar · Bijgewerkt voor EFT patch',
    'hero.subtitle': 'Aimbot, ESP & Wallhack',
    'hero.description': "Domineer elke raid in EFT's EFT. EFT cheats met ondetecteerbare aimbot, volledige ESP, wallhack.",
    'hero.cta': 'EFT Cheats Verkrijgen',
    'hero.features': 'Functies Bekijken',
    'hero.trust': 'Windows 10 & 11 · Steam · BattlEye · Extern & Ondetecteerbaar',
    'meta.title': 'EFT Cheats – Ondetecteerbare Aimbot & ESP voor EFT EFT',
    'meta.description': "EFT cheats met ondetecteerbare aimbot en ESP voor EFT's EFT.",
  },
  it: {
    'nav.home': 'Home',
    'nav.blog': 'Blog',
    'nav.buy': 'Acquista',
    'hero.status': 'Non rilevabile · Aggiornato per patch EFT',
    'hero.subtitle': 'Aimbot, ESP & Wallhack',
    'hero.description': "Domina ogni raid nello EFT di EFT. EFT cheats con aimbot non rilevabile, ESP completo, wallhack.",
    'hero.cta': 'Ottieni EFT Cheats',
    'hero.features': 'Vedi Funzionalita',
    'hero.trust': 'Windows 10 & 11 · Steam · BattlEye · Esterno & Non Rilevabile',
    'meta.title': 'EFT Cheats – Aimbot & ESP Non Rilevabile per EFT EFT',
    'meta.description': 'EFT cheats con aimbot e ESP non rilevabili per EFT di EFT.',
  },
  ar: {
    'nav.home': 'الرئيسية',
    'nav.blog': 'المدونة',
    'nav.buy': 'شراء',
    'hero.status': 'غير قابل للكشف · محدث لـ EFT تحديث',
    'hero.subtitle': 'ايمبوت، ESP وولهاك',
    'hero.description': 'سيطر على كل غارة في EFT من EFT. EFT cheats مع aimbot غير قابل للكشف، ESP كامل، wallhack.',
    'hero.cta': 'احصل على EFT Cheats',
    'hero.features': 'عرض المميزات',
    'hero.trust': 'Windows 10 & 11 · Steam · BattlEye · خارجي وغير قابل للكشف',
    'meta.title': 'EFT Cheats – ايمبوت وESP غير قابل للكشف لـ EFT EFT',
    'meta.description': 'EFT cheats مع aimbot وESP غير قابلين للكشف للعبة EFT من EFT.',
  },
  th: {
    'nav.home': 'หน้าหลัก',
    'nav.blog': 'บล็อก',
    'nav.buy': 'ซื้อ',
    'hero.status': 'ตรวจไม่พบ · อัปเดตสำหรับ EFT แพทช์',
    'hero.subtitle': 'เอมบอท, ESP & วอลแฮค',
    'hero.description': 'ครองทุกเรดใน EFT ของ EFT. EFT cheats พร้อม aimbot ตรวจไม่พบ, ESP เต็มรูปแบบ, wallhack.',
    'hero.cta': 'รับ EFT Cheats',
    'hero.features': 'ดูฟีเจอร์',
    'hero.trust': 'Windows 10 & 11 · Steam · BattlEye · ภายนอก & ตรวจไม่พบ',
    'meta.title': 'EFT Cheats – เอมบอทและ ESP ตรวจไม่พบสำหรับ EFT EFT',
    'meta.description': 'EFT cheats พร้อม aimbot และ ESP ตรวจไม่พบสำหรับ EFT ของ EFT.',
  },
  vi: {
    'nav.home': 'Trang Chu',
    'nav.blog': 'Blog',
    'nav.buy': 'Mua',
    'hero.status': 'Khong bi phat hien · Cap nhat cho ban va EFT',
    'hero.subtitle': 'Aimbot, ESP & Wallhack',
    'hero.description': 'Thong tri moi cuoc dot kich trong EFT cua EFT. EFT cheats voi aimbot khong bi phat hien, ESP day du, wallhack.',
    'hero.cta': 'Nhan EFT Cheats',
    'hero.features': 'Xem Tinh Nang',
    'hero.trust': 'Windows 10 & 11 · Steam · BattlEye · Ben Ngoai & Khong Bi Phat Hien',
    'meta.title': 'EFT Cheats – Aimbot & ESP Khong Bi Phat Hien cho EFT EFT',
    'meta.description': 'EFT cheats voi aimbot va ESP khong bi phat hien cho EFT cua EFT.',
  },
};

interface I18nContextType {
  lang: string;
  setLang: (lang: string) => void;
  t: (key: string) => string;
}

const I18nContext = createContext<I18nContextType>({
  lang: 'en',
  setLang: () => {},
  t: (key: string) => key,
});

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState(() => {
    const stored = localStorage.getItem('lang');
    if (stored && translations[stored]) return stored;
    const browserLang = navigator.language.split('-')[0];
    if (translations[browserLang]) return browserLang;
    return 'en';
  });

  const setLang = (newLang: string) => {
    setLangState(newLang);
    localStorage.setItem('lang', newLang);
    document.documentElement.lang = newLang;
    document.documentElement.dir = newLang === 'ar' ? 'rtl' : 'ltr';
    updateMetaTags(newLang);
  };

  useEffect(() => {
    stripLangQueryFromUrl();
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  }, []);

  const t = (key: string): string => {
    return translations[lang]?.[key] || translations.en[key] || key;
  };

  return (
    <I18nContext.Provider value={{ lang, setLang, t }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  return useContext(I18nContext);
}

function updateMetaTags(lang: string) {
  if (window.location.pathname !== '/') return;

  const t = translations[lang] || translations.en;
  const title = t['meta.title'] || HOME_TITLE;
  const description = t['meta.description'] || HOME_DESCRIPTION;
  document.title = title;
  const descMeta = document.querySelector('meta[name="description"]');
  if (descMeta) descMeta.setAttribute('content', description);
  const ogTitle = document.querySelector('meta[property="og:title"]');
  if (ogTitle) ogTitle.setAttribute('content', title);
  const ogDesc = document.querySelector('meta[property="og:description"]');
  if (ogDesc) ogDesc.setAttribute('content', description);
  const ogLocale = document.querySelector('meta[property="og:locale"]');
  if (ogLocale) ogLocale.setAttribute('content', lang === 'en' ? 'en_US' : `${lang}_${lang.toUpperCase()}`);
  const twTitle = document.querySelector('meta[name="twitter:title"]');
  if (twTitle) twTitle.setAttribute('content', title);
  const twDesc = document.querySelector('meta[name="twitter:description"]');
  if (twDesc) twDesc.setAttribute('content', description);
}

function stripLangQueryFromUrl() {
  document.querySelectorAll('link[hreflang]').forEach(el => el.remove());

  const url = new URL(window.location.href);
  if (!url.searchParams.has('lang')) return;

  url.searchParams.delete('lang');
  const next = `${url.pathname}${url.search}${url.hash}`;
  window.history.replaceState(window.history.state, '', next || '/');
}
