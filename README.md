## JP Mobile

### 打包/运行命令

#### Android 打包

```bash
ENVFILE=.env.staging ./gradlew assembleDebug
ENVFILE=.env.rc ./gradlew assembleRelease
```

#### iOS 运行

```bash
export ENVFILE=.env.staging && react-native run-ios
```
