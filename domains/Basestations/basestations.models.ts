import { RequestResponse } from '~/domains/Request/request.model';
import { ConcreteCitySuggestion } from '~/domains/Geo/geo.models';

export interface StationPoint {
  RtcmId: number,
  SiteCode: string,
  SiteName: string,
  LatDeg: number,
  LonDeg: number,
  Height: number,
  Epoch: string,
  AntennaManufacturer: string,
  AntennaType: string,
  AntennaSerial: string,
  AntennaHeight: number,
  ReceiverManufacturer: string,
  ReceiverType: string,
  ReceiverSerial: string,
  ReceiverFirmware: string,
  StatusCode: number,
  StatusUpdate: string,
  ConfidentRadius: number,
  PossibleRadius: number,
  StaticRadius: number
}

export interface GetStationPointsResponse extends RequestResponse {
  data: {
    points?: StationPoint[];
  }
}

