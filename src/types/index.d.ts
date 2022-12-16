interface CardProps {
  title: string;
  description: string;
  stack: string[];
  liveUrl?: string;
  githubUrl?: string;
  image?: string;
}

interface IEmailMessage {
  name: string;
  emailAddress: string;
  message: string;
}

interface IValidationErrorMessage {
  name: string | null;
  emailAddress: string | null;
  message: string | null;
}
