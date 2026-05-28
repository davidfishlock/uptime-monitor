/// Brand constants for the app.
///
/// Override at build time with --dart-define:
///   flutter build apk --dart-define=BRAND_NAME="Uptime Koala"
class Brand {
  static const String name = String.fromEnvironment(
    'BRAND_NAME',
    defaultValue: 'Uptime Monitor',
  );
}
