import { describe, expect, it } from 'vitest';
import { pageMetadata } from '../metadata';

describe('metadata', () => {
  it('creates localized titles and alternates', () => {
    const metadata = pageMetadata('es', 'contact', 'Contacto', 'Mensaje localizado');
    expect(metadata.title).toBe('Contacto | TrejoDev - Frontend Developer');
    expect(metadata.description).toBe('Mensaje localizado');
    expect(metadata.alternates?.languages).toMatchObject({ en: expect.stringContaining('/en/contact'), es: expect.stringContaining('/es/contact') });
  });
});
