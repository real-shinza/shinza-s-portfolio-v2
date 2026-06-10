import { useTranslations } from 'next-intl';
import { Section } from '@/components/layout';

export const Certifications = () => {
  const t = useTranslations('certifications');
  const certifications = t.raw('certs') as { date: string, name: string }[];

  return (
    <Section id='certs' title={t('title')}>
      <div className='divide-y divide-dashed divide-border py-2'>
        {certifications.map((cert, index) => (
          <div key={index} className='flex flex-col-reverse md:flex-row md:items-center md:justify-between py-1 md:py-1.5'>
            {/* Name */}
            <div className='text-base md:text-lg font-medium text-text'>
              {cert.name}
            </div>
            {/* Data */}
            <div className='text-xs md:text-sm text-muted-foreground'>
              {cert.date}
            </div>
          </div>
        ))}
      </div>
    </ Section>
  );
};
