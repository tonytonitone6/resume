export type JobDescriptionType = {
  name: string;
  jobTitle: string;
  location: string;
  date: {
    from: string;
    to: string;
  };
  descList: Array<string>;
};
