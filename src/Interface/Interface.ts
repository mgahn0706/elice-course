export interface CourseType {
  title: string;
  id: number;
  enroll_type: number;
  is_free: boolean;
  short_description: string;
  logo_file_url: string;
}

export interface QueryType {
  price: string[];
  keyword: string | null;
}

export interface OptionType {
  id: string;
  name: string;
  isSelected: boolean;
}
