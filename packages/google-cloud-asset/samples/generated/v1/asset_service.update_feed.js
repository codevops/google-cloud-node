// Copyright 2022 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
//
// ** This file is automatically generated by gapic-generator-typescript. **
// ** https://github.com/googleapis/gapic-generator-typescript **
// ** All changes to this file may be overwritten. **



'use strict';

function main(feed, updateMask) {
  // [START cloudasset_v1_generated_AssetService_UpdateFeed_async]
  /**
   * This snippet has been automatically generated and should be regarded as a code template only.
   * It will require modifications to work.
   * It may require correct/in-range values for request initialization.
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The new values of feed details. It must match an existing feed and the
   *  field `name` must be in the format of:
   *  projects/project_number/feeds/feed_id or
   *  folders/folder_number/feeds/feed_id or
   *  organizations/organization_number/feeds/feed_id.
   */
  // const feed = {}
  /**
   *  Required. Only updates the `feed` fields indicated by this mask.
   *  The field mask must not be empty, and it must not contain fields that
   *  are immutable or only set by the server.
   */
  // const updateMask = {}

  // Imports the Asset library
  const {AssetServiceClient} = require('@google-cloud/asset').v1;

  // Instantiates a client
  const assetClient = new AssetServiceClient();

  async function callUpdateFeed() {
    // Construct request
    const request = {
      feed,
      updateMask,
    };

    // Run request
    const response = await assetClient.updateFeed(request);
    console.log(response);
  }

  callUpdateFeed();
  // [END cloudasset_v1_generated_AssetService_UpdateFeed_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));