interface CardProps {
  title: string;
  description: string;
  stack: string[];
  liveUrl?: string;
  githubUrl?: string;
  image?: string;
}

interface I_EmailMessage {
  name: string;
  emailAddress: string;
  message: string;
}

interface I_ValidationErrorMessage {
  name: string | null;
  emailAddress: string | null;
  message: string | null;
}

type T_Images = Record<string, () => Promise<any>> | null;
