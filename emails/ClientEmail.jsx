import { Tailwind, Section, Heading, Text } from "@react-email/components";

export default function ClientEmail({ data }) {
  return (
    <Tailwind>
      <Section className="h-screen w-screen p-4">
        <Heading as="h1" className="text-xl font-bold">
          Congratulations! Your payment was successful! 🎉
        </Heading>
        <Text className="pt-6 text-gray-700">
          This is such a joy to let you know that, your project specification
          has reached my coding studio! It is now a matter of time for your
          project to step in reality! Please keep in contact by replaying to
          this email! Thank you!
        </Text>
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
        <Heading as="h2" className="mt-4 w-full border-b py-2 font-bold">
          Project description
        </Heading>
        <Section className="space-y-2 p-1">
          <p>{data?.description}</p>
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
