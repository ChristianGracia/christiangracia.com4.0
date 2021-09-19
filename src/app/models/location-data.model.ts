export class LocationData {
  constructor(
    public region?: string,
    public city?: string,
    public country?: string,
    public query?: string,
    public zip?: string
  ) {}

  static fromJSON(data) {
    return {
      country: data.country_name,
      region: data.region,
      city: data.city,
      zip: data.postal_code,
      query: data.ip,
    };
  }
}
