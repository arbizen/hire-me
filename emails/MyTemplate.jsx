import { Tailwind, Section, Heading, Text } from "@react-email/components";
export default function MyTemplate({ data }) {
  return (
    <Tailwind>
      <Section className="h-screen w-screen p-4">
        <Heading as="h1" className="text-xl font-bold">
          Congratulations! You've got a new project! 🎉
        </Heading>
        <Heading as="h2" className="mt-4 w-full border-b py-1 font-bold">
          Project description
        </Heading>
        <Section className="space-y-2 p-1">
          <p>{data?.description}</p>
        </Section>

        <Heading as="h2" className="mt-4 w-full border-b py-2 font-bold">
          Client information
        </Heading>
        <Section className="space-y-2 p-1">
          <Text>
            <b>Email:</b> {data?.clientEmail}
          </Text>
        </Section>

        <Heading as="h2" className="mt-4 w-full border-b py-2 font-bold">
          Billing information
        </Heading>
        <Section className="space-y-2 p-1">
          <Text>
            <b>Billed to:</b> {data?.customerName}
          </Text>
          <Text>
            <b>Email:</b> {data?.customerEmail}
          </Text>
          <Text>
            <b>Budget:</b> {data?.budget}
          </Text>
        </Section>
        <Section className="text-gray-500">
          <Text>
            The email was sent from hire.arbizen.com
            <br /> admin@hire.arbizen.com
          </Text>
        </Section>
      </Section>
    </Tailwind>
  );
}
