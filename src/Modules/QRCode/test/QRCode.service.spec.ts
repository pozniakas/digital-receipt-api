import { Test, TestingModule } from '@nestjs/testing';
import { v4 as uuid } from 'uuid';

import { Cryptography, QRCodeService } from '#Modules/QRCode';

const id = uuid();

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
      jest.spyOn(cryptography, 'encryptData').mockReturnValue(id);

      const promise = qrCodeService.addDataToQRCode(id);

      await expect(promise).resolves.toContain('data:image/png;base64');
      expect(cryptography.encryptData).toBeCalledWith(id);
      expect(cryptography.encryptData).toBeCalledTimes(1);
    });
  });
});
