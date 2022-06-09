import Heading from './Heading';

export default {
  title: 'Components/Heading',
  component: Heading,

  decorators: [
    (Story) => {
      return (
        <div style={{ padding: '3em' }}>
          <Story />
        </div>
      );
    },
  ],
};

export const Default = () => <Heading></Heading>;
