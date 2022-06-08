import Player from './Player';

export default {
  title: 'Components/Player',
  component: Player,

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

export const Default = () => <Player player="Player 1" score="20"></Player>;
