import PlayerForm from './PlayerForm';

export default {
  title: 'Components/Playerform',
  component: PlayerForm,

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

export const Default = () => <PlayerForm></PlayerForm>;
