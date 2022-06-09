import Navigation from './Navigation';

export default {
  title: 'Components/Navigation',
  component: Navigation,

  decorators: [
    (Story) => {
      return (
        <div style={{ padding: '3em', maxWidth: '300px' }}>
          <Story />
        </div>
      );
    },
  ],
};

export const Default = () => <Navigation>History</Navigation>;
