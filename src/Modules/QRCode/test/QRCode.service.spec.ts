import { Test, TestingModule } from '@nestjs/testing';

import { Cryptography, QRCodeService } from '#Modules/QRCode';

describe('In QRCodeService', () => {
  let qrCodeService: QRCodeService;
  let cryptography: Cryptography;

  describe('calling addDataToQRCode', () => {
    beforeEach(async () => {
      const module: TestingModule = await Test.createTestingModule({
        providers: [QRCodeService, Cryptography],
      }).compile();

      cryptography = await module.get(Cryptography);
      qrCodeService = await module.get(QRCodeService);
    });

    it('should return encrypted base64 image', async () => {
      jest.spyOn(cryptography, 'encryptData').mockReturnValue('data');
      await qrCodeService.addDataToQRCode('Test');

      expect(cryptography.encryptData).toBeCalledWith('Test');
      expect(cryptography.encryptData).toBeCalledTimes(1);
    });
  });
});
