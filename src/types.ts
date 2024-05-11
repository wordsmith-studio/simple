export type Site = {
  website: string;
  desc: string;
  title: string;
  font: string;
  ogImage?: string;
  cf: any;
  lightAndDarkMode: boolean;
  postPerPage: number;
  scheduledPostMargin: number;
  domain: string;
  analyticsEnabled?: boolean;
};
