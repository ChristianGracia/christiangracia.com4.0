export const formatLocationData = (data) => {
  const { country_name, region, city, ip, postal_code } = data;
  return {
    country: country_name,
    region: region,
    city: city,
    zip: postal_code,
    query: ip,
  };
};
