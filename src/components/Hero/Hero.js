import '../Hero/Hero.css'

export const Hero = () => {

  return (
    <svg className="intro go" viewBox="0 0 600 140">
      <text textAnchor="start" x="20" y="40" className="text text-stroke" clipPath="url(#text1)">Welcome to the online phone book page.</text>
      <text textAnchor="start" x="20" y="80" className="text text-stroke" clipPath="url(#text2)">Do not lose touch with important people.</text>
      <text textAnchor="start" x="20" y="120" className="text text-stroke" clipPath="url(#text3)">Write the contact in the phone book...</text>
      <text textAnchor="start" x="20" y="40" className="text text-stroke text-stroke-2" clipPath="url(#text1)">Welcome to the online phone book page.</text>
      <text textAnchor="start" x="20" y="80" className="text text-stroke text-stroke-2" clipPath="url(#text2)">Do not lose touch with important people.</text>
      <text textAnchor="start" x="20" y="120" className="text text-stroke text-stroke-2" clipPath="url(#text3)">Write the contact in the phone book...</text>
      <defs>
        <clipPath id="text1">
          <text textAnchor="start" x="20" y="40" className="text">Welcome to the online phone book page.</text>
        </clipPath>
        <clipPath id="text2">
          <text textAnchor="start" x="20" y="80" className="text">Do not lose touch with important people.</text>
        </clipPath>
        <clipPath id="text3">
          <text textAnchor="start" x="20" y="120" className="text">Write the contact in the phone book...</text>
        </clipPath>
      </defs>
    </svg>
  )
};