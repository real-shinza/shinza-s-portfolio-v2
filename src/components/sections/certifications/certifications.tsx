import { useTranslations } from 'next-intl';
import { Section } from '@/components/ui';

export const Certifications = () => {
  const t = useTranslations('certifications');
  const certifications = t.raw('certs') as { date: string, name: string }[];

  return (
    <Section id='certs' title={t('title')}>
      <div className='divide-y divide-dashed divide-border'>
        {certifications.map((cert, index) => (
          <div key={index} className='flex flex-col-reverse md:flex-row md:items-center md:justify-between py-2 md:py-4'>
            {/* Name */}
            <div className='text-sm md:text-base font-medium text-text'>
              {cert.name}
            </div>
            {/* Data */}
            <div className='text-xs md:text-sm text-muted'>
              {cert.date}
            </div>
          </div>
        ))}
      </div>
    </ Section>
  );
};
