import React, {forwardRef} from 'react';

const Audio = forwardRef(({id, preload, src,}, ref) => (
  <audio
    ref={ref}
    id={id}
    preload={preload}
    src={src}
  >
    <p>Your browser does not support the audio element.</p>
  </audio>
));

export default Audio;