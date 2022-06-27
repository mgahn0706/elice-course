import axios from "axios";

const COURSE_URL = "https://api-rest.elice.io/org/academy/course/list/";

interface CourseFilterType {
  filter_conditions: string;
  offset: number;
  count: number;
}

export const getCourseList = async (input: CourseFilterType) => {
  try {
    const response = await axios
      .create({
        baseURL: COURSE_URL,
      })
      .get(
        `?filter_conditions=${input.filter_conditions}&offset=${input.offset}&count=${input.count}`
      );
    return response.data;
  } catch (e) {
    return Promise.reject(e);
  }
};
