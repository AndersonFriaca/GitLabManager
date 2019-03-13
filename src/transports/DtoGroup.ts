import DtoGen from "./DtoGen";
import { JsonProperty } from "json-typescript-mapper";

export default class DtoGroup extends DtoGen {
  @JsonProperty("id")
  id: number = void 0;

  @JsonProperty("name")
  name: string = void 0;

  @JsonProperty("path")
  path: string = void 0;

  @JsonProperty("description")
  description: string = void 0;

  @JsonProperty("visibility")
  visibility: string = void 0;

  @JsonProperty("lfs_enabled")
  lfsEnabled: boolean = void 0;

  @JsonProperty("avatar_url")
  avatarUrl: string = void 0;

  @JsonProperty("web_url")
  webUrl: string = void 0;

  @JsonProperty("request_access_enabled")
  requestAccessEnabled: boolean = void 0;

  @JsonProperty("full_name")
  fullName: string = void 0;

  @JsonProperty("full_path")
  fullPath: string = void 0;

  @JsonProperty("parent_id")
  parentId: number = void 0;
}
