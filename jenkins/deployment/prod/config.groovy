// Pipeline Configuration Properties
// Import this file into the pipeline using 'load'.
class config {
  // Deployment configuration
  public static final String SOURCE_TAG = "test"
  public static final String DESTINATION_TAG = "prod"
   // Apps - Listed in the order they should be tagged
  public static final String[] APPS = ['dsc-chat-server', 'dsc-chat-client']
}

return new config();