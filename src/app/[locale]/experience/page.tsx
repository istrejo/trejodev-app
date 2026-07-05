import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { ExperiencePage } from '@/components/pages/experience-page';
import { contentFor } from '@/content';
import { isLocale, locales } from '@/lib/i18n';
import { pageMetadata } from '@/lib/metadata';

export const dynamicParams = false;
export function generateStaticParams() { return locales.map((locale) => ({ locale })); }
export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> { const { locale } = await params; if (!isLocale(locale)) notFound(); const page = contentFor(locale).experience; return pageMetadata(locale, 'experience', page.title, page.description); }
export default async function Page({ params }: { params: Promise<{ locale: string }> }) { const { locale } = await params; if (!isLocale(locale)) notFound(); return <ExperiencePage locale={locale} />; }
